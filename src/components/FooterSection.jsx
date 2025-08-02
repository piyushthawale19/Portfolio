import { ArrowUp } from "lucide-react"

export const FooterSection  =()=>{
    return( 
      <footer className="py-12 px-4 bg-card relative border-t border-border mt-18 pt-8 flex flex-wrap justify-between items-center ">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} PIYUSH THAWALE, All Right Reserved.
      </p>



      <div className="flex flex-row space-x-4 ml-4  ">
        <a href="https://piyushthawale7.wixstudio.com/my-site-4" target="_blank" rel="noopener noreferrer" className="text-sm  hover:underline hover:text-primary">
        WIX-Web
        </a>
        <a href="https://linkedin.com/in/piyushthawale" target="_blank" rel="noopener noreferrer" className="text-sm  hover:underline  hover:text-primary">
        LinkedIn
        </a>
        <a href="https://www.codechef.com/users/pride_seren_27" className="text-sm  hover:underline  hover:text-primary">
        Codechef
        </a>
        <a href="https://leetcode.com/u/ZoztJRs4Ut/" className="text-sm  hover:underline  hover:text-primary">
        LeetCode
        </a>
      </div>



      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors">
        <ArrowUp size={20} />
      </a>
      </footer>
    )
}