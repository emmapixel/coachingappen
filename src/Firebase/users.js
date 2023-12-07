import { get, getDatabase, ref } from "firebase/database";

export const getUsers = async () => {
    const clients = [];

    const db = getDatabase();
    const reference = ref(db, 'Users/');
    const snapshot = await get(reference);
    
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        
        clients.push({
            id: childKey,
            name: childData.name,
            email: childData.email,
        });
    });
    
    return clients;
}




