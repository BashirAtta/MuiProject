import React from 'react';
import { Box, Typography } from '@mui/material';
import AvatorList from './AvatorList';
import RecentPhoto from './RecentPhoto';
import LatestConversation from './LatestConversation';

export default function RightBar() {

    return (

        <Box p={5} display={{ xs: "none", sm: "inline" }} flex={2}>
            <Box paddingLeft={3} gap={2} position={"fixed"}  >
                <Typography variant="h6" fontWeight="300" >
                    Online Friends:
                </Typography>
                <AvatorList />
                <Typography variant="h6" fontWeight="300" mt={2} mb={0} >
                    Recent photos:
                </Typography>
                <RecentPhoto />
                <Typography variant="h6" fontWeight="300" mt={2} mb={0} >
                    Latest Converstion:
                </Typography>
                <LatestConversation />

            </Box>

        </Box>

    )

}