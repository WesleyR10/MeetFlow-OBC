import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Input } from '@/components/Input';
import { InputPassword } from '@/components/Input/InputPassword';
import { Button } from '@/components/ui/button';
import DarkLogo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';

import { BackGroundDiv, FormDiv } from './styles';

type passwordAppearenceType = 'text' | 'password';

export const UserLogin = () => {
    const [passswordAppearenceState, setpasswordAppearenceState] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passswordAppearenceState === 'password' ? setpasswordAppearenceState('text') : setpasswordAppearenceState('password'));

    return (
        <div className="h-screen ">
            <BackGroundDiv>
                <FormDiv>
                    <div className="flex flex-col items-center justify-center ">
                        <Link to={'/'}>
                            <img src={LightLogo} alt="" className="w-96" />
                        </Link>
                        <h2 className=" text-2xl">Entrar na sua conta!</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8 py-10">
                        <section>
                            <label htmlFor="" className="block py-2 font-bold text-black">
                                Endereço de e-mail
                            </label>
                            <Input placeholder="Digite seu email" id="email" />
                        </section>
                        <section>
                            <label htmlFor="" className="block py-2 font-bold text-black">
                                Senha
                            </label>
                            <Input placeholder="Digite sua senha" id="password" />
                        </section>
                        <section className="flex gap-2 text-black">
                            <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
                            <label htmlFor="">Mostrar senha</label>
                        </section>
                        <Button className="max-sm:96 mt-0 w-64 sm:w-96">Entrar</Button>
                        <p className="text-black">
                            Não possui uma conta?{' '}
                            <Link to={'/register'} className="text-blue-700 hover:underline">
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </FormDiv>
            </BackGroundDiv>
        </div>
    );
};