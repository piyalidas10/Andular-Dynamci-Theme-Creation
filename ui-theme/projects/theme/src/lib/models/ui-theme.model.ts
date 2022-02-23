export interface UiTheme {
    name: string;
    headerBackColor: string;
    headerTextColor: string;
    primaryColor: string;
    primaryHoverColor: string;
    textColor: string;
    textLinkColor: string;
    backgroundColor: string;
    buttonPrimaryColor: string;
    buttonPrimaryHoverColor: string;
    buttonSecondaryColor: string;
    buttonSecondaryHoverColor: string;
    bodyBackgroudColor: string;
}

export const defaultTheme: UiTheme = {
    name: 'default',
    headerBackColor: '#323232',
    headerTextColor: '#aaaaaa',
    primaryColor: '#283593',
    primaryHoverColor: '#475cf2',
    textColor: '#000000',
    textLinkColor: '#283593',
    backgroundColor: '#f4f4f4',
    buttonPrimaryColor: '#283593',
    buttonPrimaryHoverColor: '#475cf2',
    buttonSecondaryColor: '#cccccc',
    buttonSecondaryHoverColor: '#aaaaaa',
    bodyBackgroudColor: '#f4f4f4'
};

export const greenTheme: UiTheme = {
    name: 'green',
    headerBackColor: '#323232',
    headerTextColor: '#aaaaaa',
    primaryColor: '#2cc185',
    primaryHoverColor: '#31d090',
    textColor: '#000000',
    textLinkColor: '#2cc185',
    backgroundColor: '#f4f4f4',
    buttonPrimaryColor: '#2cc185',
    buttonPrimaryHoverColor: '#31d090',
    buttonSecondaryColor: '#cccccc',
    buttonSecondaryHoverColor: '#aaaaaa',
    bodyBackgroudColor: '#f4f4f4'
};

export const redTheme: UiTheme = {
    name: 'red',
    headerBackColor: '#323232',
    headerTextColor: '#aaaaaa',
    primaryColor: '#f45846',
    primaryHoverColor: '#f56959',
    textColor: '#000000',
    textLinkColor: '#f45846',
    backgroundColor: '#f4f4f4',
    buttonPrimaryColor: '#f45846',
    buttonPrimaryHoverColor: '#f56959',
    buttonSecondaryColor: '#cccccc',
    buttonSecondaryHoverColor: '#aaaaaa',
    bodyBackgroudColor: '#f4f4f4'
};