import css from 'styled-jsx/css'
import colors from './colors'
const { back}=colors;
export default css.global`
        html,
        body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            transition: .5s ease;
        }
        .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .m-none{
            margin:0;
        }
        .ml-150{
            margin-left: 150px;
        }
        .d-none{
            display:none !important;
        }
        .d-block{
            display:block !important;
        }
        `