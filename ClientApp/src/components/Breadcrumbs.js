import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export const Breadcrumbs = (props) => {
    return (
        <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#">FAQ</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#">Send spørsmål</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};