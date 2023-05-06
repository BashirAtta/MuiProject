import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import { useState } from "react"
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function FeedBar() {
    const [open, setOpen] = useState(false);
    const StyledBox = styled(Box)({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 400,
        border: '2px ',
        p: 4,
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: "25px"
    }
    );
    const UserBox = styled(Box)(({ theme }) => ({

        display: "flex",
        gap: "10px",
        alignItems: "center",
        paddingLeft: 30
    }));

    return (

        <Box flex={4} >
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Fab onClick={() => setOpen(true)} color="primary" aria-label="add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(43%)", md: 30 } }}>
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ width: { xs: 300, md: 500 }, height: { xs: 350, md: 400 }, p: "auto", position: 'absolute', top: '20%', left: { xs: "15%", sm: "30%" }, }} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography id="modal-modal-title" variant="h6" color="grey" p={2} component="h2" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} src='https://mui.com/static/images/avatar/1.jpg' alt="avatar" />
                        <Typography variant='h6' >
                            John
                        </Typography>
                    </UserBox>
                    <Box paddingLeft={3} paddingRight={3}>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            placeholder="what is in your mind?"
                            fullWidth
                            margin="normal"
                        />
                    </Box>
                    <Stack sx={{ border: 1, borderColor: "grey.400", marginLeft: 3, marginRight: 3, borderRadius: "3px" }} padding={1} direction="row" spacing={1}>
                        <EmojiEmotionsIcon color="primary" />
                        <AddPhotoAlternateIcon color="secondary" />
                        <VideoCallIcon color='success' />
                        <PersonAddIcon color="info" />
                        <Typography variant="body2" paddingLeft={3} color="gray">
                            Add to your post
                        </Typography>
                    </Stack>
                    <ButtonGroup sx={{ px: 3, pt: 1, width: "90%" }} fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button >post</Button>
                        <Button sx={{ width: "100px" }} startIcon={<CalendarMonthIcon />}>Two</Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </Box>

    )

}