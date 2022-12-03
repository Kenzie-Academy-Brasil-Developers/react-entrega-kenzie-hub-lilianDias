import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    
    :root{
        //color primary
        --color-primary: #ff577f ;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f  ;

        //Grey scale palette
        --grey-4:#121214;
        --grey-3:#212529 ;
        --grey-2:#343b41;
        --grey-1:#868e96;
        --grey-0:#f8f9fa;
        --white:#ffffff;
        
        //feedback pallette 
        --negative:#e83f5b;
        --sucess:#3fe864;
    }
  
    body{
        font-family: 'Inter', sans-serif;
        background-color: var(--grey-4);
    }

    a{
        color: var(--grey-0);
    }
`;
