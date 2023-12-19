<template>
    <main class="min-h-screen">
        <section>
            <div class="container py-36">
                <!-- Form Contact -->
                <div class="flex flex-col">
                    <!-- Title -->
                    <div 
                    data-aos="zoom-out"
                    data-aos-offset="200"
                    data-aos-delay="90"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    class="text-center mb-8 lg:mx-auto lg:w-2/3">
                        <h1 class="text-2xl md:text-4xl font-bold text-gradient">Contact Me</h1>
                        <p class="text-sm md:text-lg font-semibold text-dark dark:text-white">Jangan ragu menghubungi saya untuk berkolaborasi atau sekedar bertanya. Anda dapat menghubungi saya melalui form di bawah ini atau langsung mengirim pesan kepada saya melalui  
                            <a href="https://t.me/rioarya" target="_blank" class="text-cyan-500 underline">Telegram</a> 
                        chat 😀</p>
                    </div>
                    <!-- Contents -->
                    <form ref="form" @submit.prevent="sendEmail">
                        <div class="w-full lg:mx-auto lg:w-2/3">
                            <!-- Name -->
                            <div class="mb-8 w-full px-4">
                                <label for="name" class="text-base font-bold text-primary">Name</label>
                                <input type="text" name="user_name" id="name" placeholder="Enter your name ..." required ref="nameInput" class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
                            </div>
                            <!-- Email -->
                            <div class="mb-8 w-full px-4">
                                <label for="email" class="text-base font-bold text-primary">Email</label>
                                <input type="email" name="user_email" id="email" placeholder="Enter your email ..." required ref="emailInput" class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
                            </div>
                            <!-- Message -->
                            <div class="mb-8 w-full px-4">
                                <label for="message" class="text-base font-bold text-primary">Message</label>
                                <textarea type="message" name="message" id="message" placeholder="Convey your message ..." required ref="messageInput" class="h-32 w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                            </div>
                            <!-- Button Send-->
                            <div class="w-full px-4">
                                <button
                                    type="submit"
                                    value="Send"
                                    @click="showAlert"
                                    class="w-full rounded-full bg-primary px-8 py-3 md:text-lg font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import emailjs from '@emailjs/browser';

export default {
    methods: {
        sendEmail() {
            this.$swal({
            title: "Send a message?",
            text: "The message will be sent to Rio's email.",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#10b981",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, send it"})  
            .then((result) => {
                if (result.isConfirmed) {
                emailjs.sendForm('service_cds7csb', 'template_t7otnsi', this.$refs.form, 'EDc7qWqmGUn5NzMQw')
                .then((emailResult) => {
                    if (emailResult.text === 'OK') {
                        this.$swal({
                            title: "Success!",
                            text: "The message has been delivered to Rio's email.",
                            icon: "success"
                        });
                        // Cleaning input values ​​using refs
                        this.$refs.nameInput.value = '';
                        this.$refs.emailInput.value = '';
                        this.$refs.messageInput.value = '';
                    } else {
                        this.$swal({
                            title: "Error!",
                            text: "Message failed to send.",
                            icon: "error"
                        });
                    }
                    // console.log('Result:', emailResult.text);
                }).catch((error) => {
                    this.$swal({
                        title: "Error!",
                        text: "Message failed to send.",
                        icon: "error"
                    });
                    // console.error('Error:', error);
                });
                } else {
                    // console.log('Message sending cancelled');
                    // Handling for cancellation (optional)
                }
            });
        }
    }
}
</script>