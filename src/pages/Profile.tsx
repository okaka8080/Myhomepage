import React from "react";
import { Header } from "../component/header";
import { DotTheme } from "../component/Fonts";
import { Box, Grid, Paper, styled, ThemeProvider, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Profile = () => {
    return (
        <div>
            <Header headertext="Profile" />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                    direction="column-reverse"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs="auto">
                        <Item>
                            <ThemeProvider theme={DotTheme}>
                                <Typography fontSize={15}>
                                    おかか<br></br>
                                    About:&emsp;&emsp;UnityとかWeb系のことをやっています.<br></br>
                                    &emsp;&emsp;&emsp;&emsp;普段はゲームを作ったり,webサイトを<br></br>
                                    作ったりしています.
                                </Typography>
                            </ThemeProvider>
                        </Item>
                    </Grid>
                </Grid>

            </Box>
        </div>
    );
}