import React, { Component } from 'react';

import CheckboxInput from '../checkbox-input/checkbox-input.component';

import { ShopFilterCont, FilterFieldCont, FilterFieldHeaderCont, FilterOptionsCont, DownArrowCont } from './shop-filter.styles'

class ShopFilter extends Component {
  state = { 
    type: [],
    height: [],
    diameter: [],
    price: [],
    typeOptions: false,
    heightOptions: false
  }

  handleChange = event => {
    const { value, name } = event.target;

    if (!event.target.checked) {
      this.setState(state => {
        const newArr = state[name].filter(type => type !== value);
        return {
          [name]: newArr
        }
      })
    } else {
      this.setState(state => {
        const newArr = state[name].concat(value);
        console.log(newArr)
        return {
          [name]: newArr
        };
      });
    }
  };

  render() { 
    const { typeOptions, heightOptions } = this.state
    return (    
      <ShopFilterCont>
        <FilterFieldCont className='type-field-cont'>
          <FilterFieldHeaderCont>Type <DownArrowCont onClick={() => this.setState({typeOptions: !typeOptions})}/></FilterFieldHeaderCont>
          {
            typeOptions ? (
              <FilterOptionsCont className='type-options'>
                <CheckboxInput 
                  name='type' 
                  label='Succulants' 
                  handleChange={this.handleChange} 
                  value='succulants'
                />
                <CheckboxInput 
                  name='type' 
                  label='Pots' 
                  handleChange={this.handleChange} 
                  value='pots'
                />
                <CheckboxInput 
                  name='type' 
                  label='Cactus' 
                  handleChange={this.handleChange} 
                  value='cactus'
                />
              </FilterOptionsCont>
            ) : null
          }
          
          
        </FilterFieldCont>
        <FilterFieldCont className='height-field-cont'>
          <FilterFieldHeaderCont>Height <DownArrowCont onClick={() => this.setState({heightOptions: !heightOptions})}/></FilterFieldHeaderCont>
            {
              heightOptions ? (
                <FilterOptionsCont className='height-options'>
                  <CheckboxInput 
                    name='height' 
                    label='1cm - 10cm' 
                    handleChange={this.handleChange} 
                    value='>10cm'
                  />
                  <CheckboxInput 
                    name='type' 
                    label='Pots' 
                    handleChange={this.handleChange} 
                    value='pots'
                  />
                  <CheckboxInput 
                    name='type' 
                    label='Cactus' 
                    handleChange={this.handleChange} 
                    value='cactus'
                  />
                </FilterOptionsCont>
              ) : null
            }
        </FilterFieldCont> 
      </ShopFilterCont>  
    );
  }
}
 
export default ShopFilter;
