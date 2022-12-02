import History from "../models/History";

interface Data {
    amount: number,
    description: String,
    date: String
}

export const getHistory = async () => {

    let total = 0;

    const histories = await History.find();
    histories.map( (index: any) => {
        
        total = index.amount+total
        
    })
    
    return { total, histories };
}

export const addHistory = async ( data: Data ) => {

    const { amount, description, date } = data;
    
    try {

        const myData = new History({ amount, description, date });
        await myData.save();

        
    } catch (error) {
        return {
            ok: false,
            msg: error
        }
    }

    return {
        ok: true,
    }

}


export const deleteHistory = async ( id: String ) => {

    try {
        
        await History.findByIdAndDelete( id );

    } catch (error) {
        return {
            ok: false
        }
    }

    return {
        ok: true
    }

}
