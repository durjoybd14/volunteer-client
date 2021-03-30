import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        };
        const url = `https://guarded-temple-12412.herokuapp.com/addEvent`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '5025c7b89b9227cb3def831a08b2a19e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>Add your awesome image here </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="New Exciting Event" ref={register} />
                <br />
                <input type="file" name="exampleRequired" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;