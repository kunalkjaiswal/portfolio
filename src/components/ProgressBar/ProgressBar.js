import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 8,
        width: '80%',
        backgroundColor: "#bfbfbf",
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 10
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 5s ease-in',
        display:'block'
    }

    const labelStyles = {
        padding: 0,
        color: bgcolor,
        position: 'absolute',
        top: 0,
        fontSize:12,
        fontFamily:'Poppins',
        left: `${(completed/2)+(completed/3 + completed%3)}%`,
        fontWeight:500
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles} className="progress-bar">
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;