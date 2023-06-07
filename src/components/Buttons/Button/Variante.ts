import theme  from  "../../../styles/theme"



interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWith?: number;
        borderColor?: string
    };
    title: {
        color: string
    }
    icon: {
        color: string
    }
}

export interface ButtonVariant {
    enabled: ButtonStyle,
    disabled: ButtonStyle
}

const buttonPrimary: ButtonVariant = {
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY4,

        },
        title: {
            color: theme.COLORS.WHITE
        },
        icon: {
            color: theme.COLORS.WHITE
        }
    },
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PRIMARY,

        },
        title: {
            color: theme.COLORS.WHITE
        },
        icon: {
            color: theme.COLORS.WHITE
        }
    }
}

const  buttonOutLine:ButtonVariant ={
    enabled:{
        button:{
        backgroundColor: "transparent",
        borderWith: 2,
        borderColor:theme.COLORS.PRIMARY
        },
        title:{
            color:theme.COLORS.GRAY1
        },
        icon:{
            color:theme.COLORS.GRAY1
        }
    },
    disabled:{
        button:{
            backgroundColor:"transparent",
            borderWith: 2,
            borderColor:theme.COLORS.PRIMARY
            },
            title:{
                color:theme.COLORS.GRAY1
            },
            icon:{
                color:theme.COLORS.GRAY1
            }
    }
}

const buttonBlack:ButtonVariant ={
    enabled:{
        button:{
        backgroundColor:theme.COLORS.BLACK

        },
        title:{
            color:theme.COLORS.GRAY1
        },
        icon:{
            color:theme.COLORS.GRAY1
        }
    },
    disabled:{
        button:{
            backgroundColor:theme.COLORS.GRAY,
       
            },
            title:{
                color:theme.COLORS.WHITE
            },
            icon:{
                color:theme.COLORS.WHITE
            }
    }
}
export const  variants ={
    primary:buttonPrimary,
    outline:buttonOutLine,
    black:buttonBlack

}

