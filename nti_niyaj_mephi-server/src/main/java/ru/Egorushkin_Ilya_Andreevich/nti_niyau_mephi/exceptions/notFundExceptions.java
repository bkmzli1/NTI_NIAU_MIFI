package ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class notFundExceptions extends RuntimeException {

}
