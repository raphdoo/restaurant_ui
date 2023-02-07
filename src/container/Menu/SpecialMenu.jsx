import React from 'react';
import { images, data } from '../../constants';

import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className='app__specialMenu-title'>
      <SubHeading title="We have got some amazing menu"/>
      <h1 className='headtext__cormorant'>Today's menu</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {
            data.wines.map((wine, index) => {
              return (
                <MenuItem key={wine.title + index.toString()} title={wine.title} price={wine.price} tags={wine.tags}/>
              )
            })
          }
        </div>
        
        
      </div>
      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menu image" />
      </div>
      <div className='app__specialMenu-menu_cocktails'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {
            data.cocktails.map((cocktail, index) => {
              return (
                <MenuItem key={cocktail.title + index.toString()} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
              )
            })
          }
        </div>
        
        
      </div>
    </div>
    <div style={{marginTop: "15px"}} className=''>
      <button type='button' className='custom__button'>View more</button>
    </div>        
  </div>
);

export default SpecialMenu;
