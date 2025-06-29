function popSuccess(title, message) {
    Swal.fire ({
        heightAuto: false,
        title: title,
        text: message,
        icon: 'success'
    });
}

function popError(title, message) {
    Swal.fire ({
        heightAuto: false,
        title: title,
        text: message,
        icon: 'error'
    });
}

function popWarning(title, message) {
    Swal.fire ({
        heightAuto: false,
        title: title,
        text: message,
        icon: 'warning'
    });
}