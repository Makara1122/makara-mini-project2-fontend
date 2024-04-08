import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "This is the Metadata in About Us page",
  description: "We are Love next js",
  openGraph: {
    images:
      "https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.15752-9/431517045_373589898878374_7394543353196021325_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7L6iFacbQCuHCart0xzhnsH_aE9ZoynCwf9oT1mjKcEvQNEK8gsAKNWx-vIIlM_ot8JGXzKGKibezJiyqeQ1d&_nc_ohc=0bAiwZxUH3oAX_5FEpM&_nc_oc=AdgnzzEXoih6XKntnuQTE1IyK_BAijv78IFp15fGxuHf0HLJCUdxM9EQnJWaRACmhHs&_nc_ht=scontent.fpnh10-1.fna&oh=03_AdS_yTeCO0cLYZXfxwJwcgwKD6-uHG4o2Trp62kcwusqDg&oe=662DAF45",
  },
};


interface ContactInfo {
  icon: string;
  text: string;
  link?: string; // Optional for social media links
}

const CstadInfo: React.FC = () => {
  const contactInformation: ContactInfo[] = [
    { 
      icon: 'fas fa-map-marker-alt',
      text: 'No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia',
    },
    // ... other contact info
  ];

  return (
    <div className="container-fluid pl-3 pr-3">
      <h2 className='mx-96 text-6xl tracking-wide mb-9 text-green-400'>If you have any questions, please feel free to contact us.</h2>
      <p className='mx-96'>Khmer24 Free Classifieds strives to offer its visitors the many advantages of internet technology and to provide an interactive and personalized experience. We may use Personally Identifiable Information (your name, e-mail address, street address, telephone number) subject to the terms of this privacy policy. We will never sell, barter, or rent your email address to any unauthorized third party.</p>
     <p className='mx-96'>We recognizes the importance of protecting your privacy and our policy is designed to assist you in understanding how we collect, use and safeguard the personal information you provide to us and to assist you in making informed decisions when using our site. This policy will be continuously assessed against new technologies, business practices and our customers needs.</p>
    
      <div className="contact-container bg-white flex flex-wrap mb-3 p-2 ">
        <div className="contact-information pr-2">
          {contactInformation.map((info) => (
            <p  key={info.text} className="contact-card pl-3 pt-2 mx-96">
              <i className={`fas ${info.icon} i-style pr-2 text-primary`}></i>
              {info.link ? (
                <a href={info.link} target="_blank" rel="noreferrer">
                  {info.text}
                </a>
              ) : (
                <span>{info.text}</span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CstadInfo;