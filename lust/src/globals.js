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

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
}

.darkMode {
    display: flex;
    justify-content: end;
}
.luas{
    background-color: transparent;
    border: transparent;
    cursor: pointer;
}
.form {
    width: 25%;
    height: 65%;
    backdrop-filter: blur(5px) saturate(95%);
    -webkit-backdrop-filter: blur(5px) saturate(95%);
    background-color: rgba(17, 25, 40, 0.2);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.inside-form{
    width: 90%;
    height: 90%;
}
.esqueceu{
    text-decoration: none;
    font-size: 15px;
    color: black;
}
.esqueceu:hover{
    color: #9180ff;
    transition: 0.2s ease-in-out;
}
.entrar{
    display: flex;
    justify-content: center;
    align-items: center;
}
.social{
    display: flex;
    align-items: center;
    justify-content: start;
    width: 70%;
    height: 50px;
}
.social a{
    text-decoration: none;
    color: #cfcfcf;
}
.social svg{
    font-size: 25px;
}
.redonda{
    margin: 0 5px;
    display: flex;
    justify-content: center;    
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 50px;
}

.a-entrar{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 45px;
    border-radius: 20px;
    padding: 10px;
    color: black;
    background-color: #dab3ff;
    text-decoration: none;
}
.a-entrar:hover{
    background-color: #ebd7ff;
    transition: 0.3s ease-in-out;
}

  .darkMode svg{
    font-size: 42px;
    color: ${({ theme }) => theme.colorTheme};
}

  .hr-login{
    margin: 5px 0px;
    width: 25%;
    border-color: ${({ theme }) => theme.colorTheme};
  }
  .hr-email{
    width: 95%;
    border-color: ${({ theme }) => theme.colorTheme};
   }
   .hr-cadastro{
    margin: 5px 0px;
    width: 33%;
    border-color: ${({ theme }) => theme.colorTheme};
   }
   .hr-nome{
    width: 95%;
    border-color: ${({ theme }) => theme.colorTheme};
   }
   .input-senha{
    color: ${({ theme }) => theme.colorTheme};
   }
   .input-email{
    color: ${({ theme }) => theme.colorTheme};
    }   
    .hr-senha{
        width: 95%;
        border-color: ${({ theme }) => theme.colorTheme};
    }
    .esqueceu{
        color: ${({ theme }) => theme.colorTheme};
    }
    .social a{
        color: ${({ theme }) => theme.colorTheme};
    }
    
    .a-entrar{
         background-color: ${({ theme }) => theme.colorTheme}; 
    }
    .a-entrar:hover{
        background-color: #ffffff; 
    }
    .idade{
        color:${({ theme }) => theme.colorTheme};
    }
    .calendar{
        color: ${({ theme }) => theme.colorTheme};
        border: 2px solid ${({ theme }) => theme.colorTheme};
    }
`;
