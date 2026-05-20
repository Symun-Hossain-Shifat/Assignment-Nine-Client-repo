"use client";

import { authClient } from "@/lib/auth-client";

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

export function Updateprofilepage () {

    const Updateprofile = async (e) => {
        e.preventDefault()
        const Formdata = e.target 
        const name = Formdata.Name.value 
        const image = Formdata.Image.value 

        try{
                   await authClient.updateUser({
                 name ,
                 image
                    })

                    toast.success(' “Profile updated successfully!”')
        }catch(error){
          console.log(error)
        }

    }
  return (
    <Modal>
      <Button className = ' w-full flex items-center gap-3' variant="danger-soft"> <MdEdit /> Edit Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                 <MdEdit  size={20} />
              </Modal.Icon>
              <Modal.Heading>Edit Profile</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below For Update your profile information !
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={Updateprofile} className="flex flex-col gap-4">
                  <TextField className="w-full" name="Name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                
                  
                  <TextField type="url" className="w-full" name="Image" >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your Image URL" />
                  </TextField>
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}