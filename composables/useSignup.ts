export interface SignupUser {
    first_name: string;
    date_of_birth: Date | null;
    location: string;
    profile_picture: string | null;
}

export type SignupStep = 'get_started' | 'name_and_dob' | 'verify_location' | 'upload_picture';

export const UseSignup = () => {
    const defaultSignupData: SignupUser = {
        first_name: '',
        date_of_birth: null,
        location: '',
        profile_picture: null
    };
    
    const signupData = useState("signupData", () => ({ ...defaultSignupData }));
    const currentStep = useState<SignupStep>("currentStep", () => 'get_started');

    const initSignup = () => {
        signupData.value = { ...defaultSignupData };
        currentStep.value = 'get_started';
    };
    
    const setSignupData = (updatedData: Partial<SignupUser>) => {
        signupData.value = { ...signupData.value, ...updatedData };
    };
    
    const goToNextStep = () => {
        const steps: SignupStep[] = ['get_started', 'name_and_dob', 'verify_location', 'upload_picture'];
        const currentIndex = steps.indexOf(currentStep.value);
        if (currentIndex < steps.length - 1) {
            currentStep.value = steps[currentIndex + 1];
        }
    };

    const goToPreviousStep = () => {
        const steps: SignupStep[] = ['get_started', 'name_and_dob', 'verify_location', 'upload_picture'];
        const currentIndex = steps.indexOf(currentStep.value);
        if (currentIndex > 0) {
            currentStep.value = steps[currentIndex - 1];
        }
    };
    
    const submitSignup = async () => {
        await fetchFromClient.post('/user/create', 'main-api', {
            body: JSON.stringify({
                userData:{
                    firstName: signupData.value.first_name,
                    dateOfBirth: signupData.value.date_of_birth,
                    location: signupData.value.location,
                    profilePicture: signupData.value.profile_picture
                },
                genres:[]
            })
        })
        
        //go to user's page
        
        resetSignup()
    };
    
    const resetSignup = () => {
        initSignup();
    };

    return {
        signupData,
        currentStep,
        initSignup,
        setSignupData,
        goToNextStep,
        goToPreviousStep,
        submitSignup,
        resetSignup
    };
};
