<template>
  <main>
     <section style="max-width:700px;" class="m-auto">
        <div class="d-flex flex-row  border-bottom py-3">
            <div>
                <img src="../../assets/tt_avatar_small.jpg" style="height:140px" class="rounded-circle " alt="Therapist">
            </div>
            <div class="d-flex flex-column justify-content-center align-content-center ps-5">
                <div>
                    <i class="fas fa-star" style="color:orange"></i>
                    <i class="fas fa-star ms-2" style="color:orange"></i>
                    <i class="fas fa-star ms-2" style="color:orange"></i>
                    <i class="fas fa-star ms-2" style="color:orange"></i>
                    <i class="fas fa-star ms-2" style="color:grey"></i>
                    <small>4.0</small>
                </div>
                <div>
                   <small class="text-muted">based on 8 ratings</small> 
                </div>
            </div>
        </div>
        

        <div class="d-flex flex-column border-bottom py-4">
            <div class="d-flex flex-row">
                <div class="w-50">
                    <small class="text-muted d-block"> First name</small>
                    <p class="text-bold"> John </p>
                </div>
                <div>
                    <small class="text-muted d-block"> Last name</small>
                    <p class="text-bold"> Doe </p>
                </div>
             </div>
             <div class="d-flex flex-row">
                <div class="w-50">
                    <small class="text-muted d-block"> Phone number</small>
                    <p class="text-bold"> +01293289049834 </p>
                </div>
                <div>
                    <small class="text-muted d-block"> Gender</small>
                    <p class="text-bold"> Female </p>
                </div>
             </div>
             <div class="d-flex flex-row">
                <div>
                    <small class="text-muted d-block"> Email </small>
                    <p class="text-bold"> masonarmani38@gmail.com </p>
                </div>
             </div>
             <div class="d-flex flex-row">
                <div>
                    <small class="text-muted d-block"> Biography </small>
                    <p class="text-bold">  I’m interested in the unconscious processes which form part of at play in our 
                        relationship - why do we stay together? Why do we want to part? Why can’t I find 
                        a fulfilling partnership? Our family background, past experiences and environment 
                        can shape how we manage our adult relationships. 
                    </p>
                </div>
             </div>
        </div>


        <div class="d-flex flex-column border-bottom py-4">
            <div class="d-flex flex-row">
                <div class="w-50">
                    <small class="text-muted d-block"> Ethinicity </small>
                    <p class="text-bold"> White British </p>
                </div>
                <div>
                    <small class="text-muted d-block"> Language </small>
                    <p class="text-bold"> English </p>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column border-bottom py-4">
            <div class="d-flex flex-row">
                <div class="w-50">
                    <small class="text-muted d-block"> Education </small>
                    <p class="text-bold"> PHD </p>
                </div>
                <div>
                    <small class="text-muted d-block"> Experience </small>
                    <p class="text-bold"> 10 Years </p>
                </div>
            </div>
        </div>

        <div class="py-4">
            <p class="text-muted">Speciality</p>
            <div>
                <button type="button" class="btn btn-outline-secondary btn-sm">Stress</button>
                <button type="button" class="btn btn-outline-secondary btn-sm ms-3">Relationship</button>
                <button type="button" class="btn btn-outline-secondary btn-sm ms-3">Work</button>
                <button type="button" class="btn btn-outline-secondary btn-sm ms-3">Education</button>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "TherapistPreview",
  components: {},
  data() {
    return {};
  },
  computed: {},
};
</script>
