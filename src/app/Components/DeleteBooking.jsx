"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";

export function DeleteBooking ({Data}) {
  const {_id} = Data
     const Deleteitem =  async () => {

       const {data : tokendata } = await authClient.token() 


      const res = await  fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/allbookings/${_id}` , {
        method : 'DELETE',
        headers : {

            'content-type' : 'application/json' ,
            authorization : `Bearer ${tokendata?.token}`
        }
      })
      const Data = await res.json()
      if(Data){
        toast.warning('“Appointment deleted successfully!”')
      }
      console.log(Data)
      redirect('/')
    }
  return (
    <AlertDialog>
      <Button   className='rounded-none flex items-center gap-2' variant="danger"> <AiOutlineDelete /> Delete</Button>
      <AlertDialog.Backdrop
       className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="blur">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Appointment permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete . This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={Deleteitem} type="submit" slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}