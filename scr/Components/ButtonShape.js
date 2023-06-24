import React from 'react'
import { Button } from 'native-base'

function ButtonShape(mt,bg,color,children,onPress) {
  return (
     <Button 
     w={'full'}
     h={55}
     mt={mt}
     rounded={'full'}
     bg={bg}
     _text={{
      color:color,
      fontWeight:"bold",
     }}
     _pressed={{bg:bg}}
     Onprees={onPress}
     >
      {children}

     </Button>
  );
}

export default ButtonShape