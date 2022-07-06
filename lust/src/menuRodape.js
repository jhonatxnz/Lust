import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  .content {
    width: 100%;
    height: 100vh;
}
    // MENU
    nav{
        background-color: ${({ theme }) => theme.backgroundTheme};
    }
    .esq .lust{
        color: ${({ theme }) => theme.text};
    }
    .categorias{
        color: ${({ theme }) => theme.text};
    }
    .dir svg{
        color: ${({ theme }) => theme.text};
    }
    .shine:hover{
        background-color: ${({ theme }) => theme.black};    
    }
    .search {
        color: ${({ theme }) => theme.text};
    }
    .search::placeholder {
        color: ${({ theme }) => theme.text};
    }
      
    @media (max-width: 769px) {
        .search{
            width:20%;
        }
    }
    @media (max-width: 469px) {
        nav{
            flex-direction: column;
            height: auto;
        }
        nav .esq {
            width:100%;
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        nav .dir {
            width:100%;
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .search{
            width:80%;
        }
    }
        
`;
