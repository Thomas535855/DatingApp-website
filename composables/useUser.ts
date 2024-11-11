import {Utils} from "~/scripts/script-collection";

export interface User {
    id: number;
    first_name: string;
    date_of_birth: Date;
    location: string;
    profile_picture: string;
    matches: Match[];
    genres: Genre[];
}

export interface Match{
    id: number
    user_id_one: number;
    user_id_two: number;
    conversation: Conversation
}

export interface Conversation{
    id: number;
    match_id:number;
    messages: Message[]
}

export interface Message{
    id: number;
    conversation_id: number;
    user_id: number;
    content: string;
    created_date: Date;
}

export interface Genre{
    id: number;
    name: string;
}

export const UseUser = () => {
    const defaultData = {
        id: 0,
        first_name: "",
        date_of_birth: new Date(),
        location: "",
        profile_picture: "",
        matches: [],
        genres: []
    } as User

    const userData = useState("userData", () => defaultData);
    const data = computed(() => get());

    const init = async (userId: number|string)=> {
        let userRes = (await fetchFromClient.get(`/user/${userId}/get`, 'main-api') as any)._data.message;

        userData.value = { ...userData.value, ...userRes };
    }
    
    const get = (): User => {
        return Utils.deepCopy(userData.value);
    };

    const setUserData = (updatedData: Partial<User>) => {
        userData.value = { ...userData.value, ...updatedData };
    };

    const getAge = (): number => {
        const today = new Date();
        const birthDate = new Date(userData.value.date_of_birth);

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();
        
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        return age;
    }
    
    return{
        data,
        init,
        getAge,
        setUserData
    }
}