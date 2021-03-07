import React from "react";
import "./Header.scss";

export interface IHeaderProps {
    children?: React.ReactNode;
    prop?: any;
}

const Header: React.FC<IHeaderProps> = ({
    children,
    ...props
}) => {
    return (
        <div className="header">
            <h2>Realtime Chap App</h2>
        </div>
    );
};

export default Header;
