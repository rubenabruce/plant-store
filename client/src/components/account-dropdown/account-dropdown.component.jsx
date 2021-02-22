import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { createStructuredSelector } from 'reselect';

import { useAuth } from '../../hooks/use-auth';
import { toggleAccountDD } from '../../redux/user/user.actions';

import { selectAccountDDHidden } from '../../redux/user/user.selectors';

import { AccountDropdownCont, ContentCont, OptionCont } from "./account-dropdown.styles";

const AccountDropdown = ({ showAccountDD }) => {
  const auth = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();

  const transition = useTransition(showAccountDD, null, {
    from: {
      height: '0px'
    },
    enter: {
      height: '150px'
    },
    leave: {
      height: '0px'
    }
  })

  return ( 
    transition.map(({ item, key, props: animation }) => ( 
      item &&
      <AccountDropdownCont key={key} style={animation}>
        {
          auth.currentUser ? (
            <ContentCont>
              <OptionCont>Account</OptionCont>
              <OptionCont onClick={() => {auth.signout(); history.push('/signin'); dispatch(toggleAccountDD())}}>Sign Out</OptionCont>
            </ContentCont>
          ) : (
            <ContentCont>
              <OptionCont onClick={() => {history.push('/signin'); dispatch(toggleAccountDD())}}>Sign In</OptionCont>
            </ContentCont>
          )
        }
      </AccountDropdownCont>
    ))
  );
}

const mapStateToProps = createStructuredSelector({
  showAccountDD: selectAccountDDHidden
})

export default connect(mapStateToProps)(AccountDropdown);