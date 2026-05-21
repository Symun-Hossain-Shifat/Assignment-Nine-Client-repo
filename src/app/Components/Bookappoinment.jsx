"use client";

import { authClient } from "@/lib/auth-client";

import {Button, FieldError, Input,  Modal, Surface, TextField} from "@heroui/react";
import {Label} from "@heroui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { toast } from "react-toastify";
export  function WithForm({Data}) {
  // console.log(Data)

  

  
  const { data: session } = authClient.useSession()
  const UserInfo = session?.user
  // console.log(UserInfo)


  const Getbookingdata =  async (e) => {
  e.preventDefault()
  
  const FormData = e.target
  const email = FormData.Email.value
  const doctorname = FormData.Doctor.value
  const patientname = FormData.Patient.value 
  const phone = FormData.Phone.value
  const gender = FormData.Gender.value 
  const date = FormData.Date.value 
  const time = FormData.Time.value
  const BookingData = {email , doctorname , patientname , phone , gender , date , time }
  // console.log(BookingData)
// console.log(`${process.env.NEXT_PUBLIC_SERVER_PORT}/allbookings`)

const {data : tokendata } = await authClient.token() 
console.log(tokendata)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/allbookings` , {
    method : 'POST', 
    headers : {
      'content-type' : 'application/json',
      authorization : `Bearer ${tokendata?.token}`
    },
    body : JSON.stringify(BookingData)
  })
  const Data = await res.json();
  console.log(Data)

  if(Data){
    toast.success('“Appointment booked successfully!”')

  }
  }

  return (
    <Modal>
      <Button className='rounded-none w-full  mt-5 flex items-center gap-3' variant="outline"> <TbBrandBooking /> Book Appointment Now</Button>
      <Modal.Backdrop
      className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="blur">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegCalendarAlt size={20} />
              </Modal.Icon>
              <Modal.Heading>Book Appoinment</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. 
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={Getbookingdata} className="flex flex-col gap-4">
                     <TextField  className="w-full" name="Email" type="email" isRequired>
                    <Label>User Email </Label>
                    <Input   value={UserInfo?.email}  readOnly />
                  </TextField>
                  <TextField   className="w-full" name="Doctor" type="text" isRequired>
                    <Label>Doctor Name</Label>
                    <Input value={Data.name} readOnly />
                  </TextField>
                 
                  <TextField defaultValue={'Jhon Doe'} className="w-full" name="Patient" type="text" isRequired>
                    <Label>Patient Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField defaultValue={'Male'} className="w-full" name="Gender" type="text" isRequired>
                    <Label>Gender</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                   
                  <TextField defaultValue={'01619050765'} className="w-full" name="Phone" type="tel" isRequired>
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>

                   <TextField  name="Date" type="date" isRequired>
                  <Label>Appointment Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
                  
                   <TextField defaultValue="10:34 AM" name="Time" isRequired>
                  <Label>Appointment Time</Label>
                  <Input className="rounded-2xl" />
                  <FieldError />
                </TextField>
                   <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Confirm Booking</Button>
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