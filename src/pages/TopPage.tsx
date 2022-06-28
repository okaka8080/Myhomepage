import React from "react";
import { Header } from "../component/header";
import '../component/background.scss'

export const TopPage = () => {
    return (
        <div>
            <Header headertext="Top" />
            <div>
                トップページ
            </div>
        </div>
    );
}