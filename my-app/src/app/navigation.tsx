
export default function Navigation() {
    // const navigationlinks=['link1','link2','link3'] array
 const navigationlinks = [    //arrayof oject for using many links
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" }
];

    
  return(
      <>
  <div className="topnav">
    <ul>
        {navigationlinks.map((link)=>
            (<li><a href={link.path}>{link.name}</a></li>)
            )}</ul>
  
  {/* <a href="#">Link</a>
  <a href="#">Link</a> */}
</div>
 </>

  )
  
}