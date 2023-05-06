
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


export default function AvatorList (){

    return(

            <AvatarGroup max={5}>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/https://mui.com/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/https://mui.com/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
             </AvatarGroup>
          );
     

}