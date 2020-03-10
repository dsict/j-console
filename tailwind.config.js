const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        colors: {
            black: '#000000',
            white: '#FFFFFF',
            primary: {
                default: '#6638B6',
                dark: '#3C2C84',
            },
            primary1: '#8185D1',
            primary2: '#A5ACCE',
            primary3: '#EBEAF6',
            primary4: '#F8F8FC',

            secondary: '#0080FB',
            secondary1: '#43BEFF',
            secondary2: '#F5F9FD',

            dark: '#222532',
            gray: {
                ...colors.gray,
                default: '#858895',
            },
            gray1: '#A7A9B2',
            gray2: '#DCDDE2',
            gray3: '#F2F2F2',

            alert: '#EF3817',
            safe: '#60B731',

            other1: '#FF7750',
            other2: '#FFCE02',
            other3: '#C2E01E',
            other4: '#3F7B1A',
        },
        maxHeight: {
            0: '0',
            '1/4': '25%',
            '1/3': '33%',
            '1/2': '50%',
            '2/3': '66%',
            '3/4': '75%',
            full: '100%',
        },
    },
    variants: {},
    plugins: [],
};
