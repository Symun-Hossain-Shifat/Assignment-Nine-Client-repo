"use client";

import { authClient } from "@/lib/auth-client";

import {Button, FieldError, Input,  Modal, Surface, TextField} from "@heroui/react";
import {Label} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


import { FaRegCalendarAlt } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { toast } from "react-toastify";
export function UpdateBooking ({Data}) {

  // console.log(Data)
  const router = useRouter()
  
  const { data: session } = authClient.useSession()
  const UserInfo = session?.user
  // console.log(UserInfo)
//  console.log(Data)

 
  const [formdata , setFormdata] = useState({
    email : UserInfo?.email  || '', 
    doctor : Data?.doctorname || '' ,
    time : Data?.time || '' ,
    patient : Data?.patientname || '' ,
    gender : Data?.gender || '' ,
    date : Data?.date || '' ,
    phone : Data?.phone || '' ,


  })

  useEffect (() => {
    setFormdata({
       email : UserInfo?.email  || '', 
    doctor : Data?.doctorname || '' ,
    time : Data?.time || '' ,
    patient : Data?.patientname || '' ,
    gender : Data?.gender || '' ,
    date : Data?.date || '' ,
    phone : Data?.phone || '' ,

    })
  },[UserInfo , Data])

  const Updatebookingdata =  async (e) => {
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
  
  const {data : tokendata } = await authClient.token() 

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allbookings/${Data._id}` , {
    method : 'PATCH',
    headers : {
        'content-type' : 'application/json' ,
         authorization : `Bearer ${tokendata?.token}`
    },
    body : JSON.stringify(BookingData)
  })
  const result = await res.json()
  // console.log(result)
  if(result){
    toast.success('“Appointment updated successfully!”')
    router.refresh()
  }
  }

  return (
    <Modal>
      <Button className='rounded-none flex items-center gap-2' variant="secondary"> <RxUpdate /> Update Now</Button>
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
              <Modal.Heading>Update Appoinment</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. 
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={Updatebookingdata} className="flex flex-col gap-4">
                     <TextField   className="w-full"  >
                    <Label>User Email </Label>
                    <Input value = {formdata.email}  name="Email" type="email" readOnly />
                  </TextField>
                  <TextField  className="w-full" >
                    <Label >Doctor Name</Label>
                    <Input name="Doctor" type="text"   value ={formdata.doctor}  readOnly />
                  </TextField>
                 
                  <TextField  className="w-full"  >
                    <Label>Patient Name</Label>
                    <Input value = {formdata.patient} 
                      onChange ={(e) => {
                       setFormdata({
                        ...formdata , patient : e.target.value
                       })
                     }}
                     name="Patient" type="text" />
                  </TextField>

                  <TextField  className="w-full"  >
                    <Label>Gender</Label>
                    <Input  value = {formdata.gender} 
                     onChange ={(e) => {
                       setFormdata({
                        ...formdata , gender : e.target.value
                       })
                     }} name="Gender" type="text" />
                  </TextField>
                   
                  <TextField  className="w-full" >
                    <Label>Phone</Label>
                    <Input  value = {formdata.phone} 
                     onChange ={(e) => {
                       setFormdata({
                        ...formdata , phone : e.target.value
                       })
                     }}  name="Phone" type="tel" />
                  </TextField>

                   <TextField    >
                  <Label>Appointment Date</Label>
                  <Input  value = {formdata.date} 
                     onChange ={(e) => {
                       setFormdata({
                        ...formdata , date : e.target.value
                       })
                     }} name="Date" type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
                  
                   <TextField   >
                  <Label>Appointment Time</Label>
                  <Input  value = {formdata.time} 
                     onChange ={(e) => {
                       setFormdata({
                        ...formdata , time : e.target.value
                       })
                     }} name="Time" className="rounded-2xl" />
                  <FieldError />
                </TextField>
                   <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot= 'close'>Save</Button>
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