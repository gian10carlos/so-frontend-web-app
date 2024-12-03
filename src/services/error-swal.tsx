import Swal from "sweetalert2";

export const handleErrorSwal = (error: string) => {
    Swal.fire({
        title: "Error",
        text: `${error}`,
        icon: "error",
        timer: 1500
    });
}
