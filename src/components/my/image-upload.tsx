/* eslint-disable @next/next/no-img-element */
import { FileImage, Upload } from 'lucide-react';
import React, { useState } from 'react';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

export function ImageUpload (){
  const [image, setImage] = useState<any>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(e.target.files[0]))
    } else {
      setImage(null);
    }
  };

  return (
    <div className="flex flex-col space-y-2 items-center justify-center">
      <label
        htmlFor="image"
        className="w-full overflow-hidden border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        {image ? (
          <img src={image} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="flex justify-center items-center gap-2">
            <FileImage className="w-4 h-4"/>
            Selecione uma logo
          </div>
        )}
      </label>
      <input
        onChange={handleImageChange}
        type="file"
        id="image"
        accept="image/*"
        className="sr-only"
      />

      <Separator/>

      <Button className="w-full gap-2" variant="outline">
        <Upload className="w-4 h-4"/>
        Carregar logotipo
      </Button>
    </div>
  );
};

export default ImageUpload;
