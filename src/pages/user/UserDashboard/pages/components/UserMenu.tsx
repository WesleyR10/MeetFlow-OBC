import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLogOut } from '@/hooks/useLogOut';
import { useEffect } from 'react';
import { AlertDialogContainer } from './AlertDialogContainer';
import { useState } from 'react';
import { UserType } from '@/types/userType';
import { userAPI } from '@/api/userAPI';

export const UserMenu = () => {
    const [userData, setUserData] = useState<UserType | undefined>();

    console.log(userData);

    const logOut = useLogOut();

    useEffect(() => {
        const getUserData = async () => {
            const res = await userAPI.fetchUserData();
            const { user } = await res;
            setUserData(user);
        };

        getUserData();
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} className="h-11 flex items-center justify-start gap-3 px-10 py-7 max-lg:px-0 max-lg:justify-center">
                    <Avatar>
                        <AvatarImage src={userData?.photoUrl} className="w-10" />
                        <AvatarFallback>{userData?.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-start">
                        {userData && <h2 className="text-left">{userData.name}</h2>}
                        {userData && <p className="text-left text-xs text-slate-400">{userData.email}</p>}
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <Button variant={'ghost'} asChild>
                    <AlertDialogContainer triger="Sair" alertMessage="Deseja realmente sair?" description="Você será redirecionado para o início" callback={logOut} />
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
