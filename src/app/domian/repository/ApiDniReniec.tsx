import axios from "axios";

export class ApiDniReniec {
    private token = process.env.REACT_APP_TOKEN_RENIEC;

    public async verifyDni(dni: String) {

        try {
            const response = await axios.get(`/v2/reniec/dni?numero=${dni}`, {
                headers: {
                    'Referer': 'https://apis.net.pe/consulta-dni-api',
                    'Authorization': `Bearer ${this.token}`,
                }
            });

            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error('');
        }
    }
}
