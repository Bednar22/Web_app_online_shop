import React, {useState} from 'react'
import '../../App.css'
import axios from 'axios'

//material ui imports
import {TextField, Button, Grid, Typography, Card} from'@material-ui/core'

const LoginForm = () => {

    const[password, setPassword] = useState('');
    const[email, setMail] = useState('');

    const restartStates = () =>{
        setMail('');
        setPassword('');
    }

    const loginUser = (e) =>{
        
        const user = {
            email: email,
            password: password
        }
        console.log(user);

        axios.post('/users/login', user).then(res=>console.log(res.data));
        
        e.preventDefault();
        restartStates();
    }

    return(
    
            <Card>
            <Grid container direction='column' alignItems="center" spacing={4}  >
            <Grid item>
                <TextField 
                variant='outlined' 
                placeholder='Adres e-mail'
                type='email'
                onChange={(e)=>setMail(e.target.value)}>
                </TextField>
            </Grid>
            <Grid item>
                <TextField 
                
                variant='outlined'
                 placeholder='Hasło' 
                 type='password' 
                 onChange={(e)=>setPassword(e.target.value)}>
                </TextField>
            </Grid>
            <Grid item>
                <Button color='secondary' variant='contained' onClick={(e)=>loginUser(e)} >Zaloguj</Button>
            </Grid>
            <Grid item>
                <Typography>
                    Nie masz konta? (Zarejestruj się tutaj) -link
                </Typography>
            </Grid>
            </Grid>
            </Card>

    )

}

export default LoginForm;