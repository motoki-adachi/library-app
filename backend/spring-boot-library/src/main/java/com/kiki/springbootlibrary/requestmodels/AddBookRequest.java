package com.kiki.springbootlibrary.requestmodels;

import lombok.Data;

@Data
public class AddBookRequest {

    private String title;
    private String author;
    private String description;
    private int copies;
    private String img;
    private String category;
}