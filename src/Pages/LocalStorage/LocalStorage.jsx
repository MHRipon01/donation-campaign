import { toast } from "react-toastify"

const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donation-added')
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return []
}

const saveDonation = id => {
    const storedDonations = getStoredDonation()
    console.log(storedDonations);
    const exists = storedDonations.find(donationId => donationId ===  id)
    console.log(exists);
if(!exists){
storedDonations.push(id)
localStorage.setItem('donation-added', JSON.stringify(storedDonations))
console.log('exist korena' , storedDonations);
}
if(exists){
    toast('Already added')
}
}

export {getStoredDonation , saveDonation};