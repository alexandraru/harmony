const baseUrl = "https://api.telegram.org/bot6719655858:AAGtl7selnbzjFMgqvAYJiPySE74bvrBsNs/"
const sendMessage = async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-4026419318&text=${message}`;
    const response = await fetch(url);
    console.log("response", response)

}

export default sendMessage