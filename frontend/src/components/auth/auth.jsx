import axios from "../../axios_config/axios.config"
import { jwtDecode } from "jwt-decode"

export const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken")

    try {

        const response = await axios.post("users/refresh-token", {
            refreshToken,
        })
        const { accesToken, refreshToken: newRefreshToken } = response.data

        localStorage.setItem("token", accesToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        return accesToken
    } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        return null
    }
}

export const checkTokenExpiration = async () => {
    const token = localStorage.getItem("token");

    if (!token) return false

    const decoded = jwtDecode(token)

    if (decoded.exp * 1000 < Date.now()) return false

    try {
        await refreshToken()
        return true
    } catch (error) {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken");
        return false
    }
}