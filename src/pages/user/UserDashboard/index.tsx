import { Separator } from '@/components/ui/separator';
import Logo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/theme-provider';
import { Button } from '@/components/ui/button';
import { Home, Layers, Users, User, LifeBuoy, Settings } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export const UserDashboard = () => {
    const { theme } = useTheme();

    return (
        <div>
            <div className="flex">
                <aside className="flex  h-screen w-2/12 flex-col justify-between border-r-2 pb-8 pt-2">
                    <div className="flex flex-col gap-16">
                        <div className=" w-full">
                            <Link to={'/'}>
                                <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="img h-28" />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                                <Home />
                                <p>Serviços</p>
                            </Button>
                            <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                                <Layers />
                                <p>Meus agendamentos</p>
                            </Button>
                            <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                                <Users />
                                <p>Grupos</p>
                            </Button>
                        </div>
                    </div>
                    <div className=" flex w-full flex-col gap-5 ">
                        <Link to={'/register'}>
                            <Button variant={'ghost'} className="flex w-full items-center justify-start gap-3 px-10">
                                <User />
                                <p>Fazer um conta</p>
                            </Button>
                        </Link>
                        <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                            <LifeBuoy />
                            <p>Suporte</p>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                                    <Settings className="text-violet-700 " />
                                    <p className="text-violet-700">Configurações</p>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Theme</DropdownMenuItem>
                                <Separator orientation="horizontal" />
                                <DropdownMenuItem>Others</DropdownMenuItem>
                                <Separator orientation="horizontal" />
                                <DropdownMenuItem>Theme</DropdownMenuItem>
                                <Separator orientation="horizontal" />
                                <DropdownMenuItem>Others</DropdownMenuItem>
                                <Separator orientation="horizontal" />
                                <DropdownMenuItem>Theme</DropdownMenuItem>
                                <Separator orientation="horizontal" />
                                <DropdownMenuItem>Others</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </aside>
                <div></div>
            </div>
        </div>
    );
};
