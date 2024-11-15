import axios from "axios";

export class ApiDniReniec {
    private token = process.env.REACT_APP_TOKEN_RENIEC;

    public async verifyDni(dni: String) {

        try {
            const response = await axios.get(`https://apis.net.pe/consulta-dni-api/v2/reniec/dni?numero=${dni}`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            });

            return response.data;
        } catch (error) {
            throw new Error('');
        }
    }
}
