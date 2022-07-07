import React from "react";
import { Header } from "../component/header";
import '../component/background.scss'
import '../component/Font.scss'
import { DotTheme } from "../component/Fonts";
import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";

export const TopPage = () => {
    return (
        <div>
            <Header headertext="Top" />
            <ThemeProvider theme={DotTheme}>
                <Typography fontSize={100}>
                    Hello My World!!
                </Typography>
                <Typography fontSize={20}>
                    作ったゲームやwebアプリについて紹介するサイトです。
                </Typography>

            </ThemeProvider>

        </div>
    );
}