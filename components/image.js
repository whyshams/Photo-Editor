import React from 'react';
import { useState,useEffect } from 'react';


export const PixoImage = ({ src, onChange }) => {
    const [piixo,setPiixo] = useState()
    useEffect(() => {
        const { Pixo } = window;
        const pixo = new Pixo.Bridge({
          type: 'modal',
          apikey: '1tg74achqsgw', // put your API key here!
          onSave: img => onChange(img.toDataURL()),
        });
        setPiixo(pixo)

    },[])
     

    
 
  return <img src={src} onClick={() => piixo.edit(src)} />;
}