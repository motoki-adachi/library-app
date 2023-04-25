package com.kiki.springbootlibrary.responsemodels;

import com.kiki.springbootlibrary.entity.Book;
import lombok.Data;

@Data
public class ShelfCurrentLoansResponse {

    private Book book;
    private int dayLeft;

    public ShelfCurrentLoansResponse(Book book, int dayLeft) {
        this.book = book;
        this.dayLeft = dayLeft;
    }
}