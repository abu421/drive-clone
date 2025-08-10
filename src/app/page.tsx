'use client';
import styles from "./page.module.scss";
import Sidebar from "@/components/sidebar/sidebar";
import NavBar from "@/components/navbar/navbar";
import Folder from "@/components/folder/folder";
import { Folder as FolderIcon, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export default function Drive() {
  const [sideBar, setSideBar] = useState(true);
  function handleShowSideBar(){
    setSideBar(prev => !prev);
  }
  return (
    <>
    <div className={styles.main}>
      <div className={`${sideBar ? styles.hidden : styles.navbar768}`}>
        <Sidebar handleShowSideBar={handleShowSideBar} classNames={{wrapper:styles.show, cross:styles.cross}}/>
      </div>
      <div className={styles.secondary}>
        <NavBar handleShowSideBar={handleShowSideBar} classNames={{wrapper:styles.navbarWrapper, burgerMenu:styles.cross, navUpload: styles.navUpload}}/>
        <div className={styles.itemsContainer}>
            <Folder icon={<FolderIcon size={64} color={"rgb(59, 130, 246)"}/>} title="Documents" lastModified="2 days ago" className={styles.folders}/>
            <Folder icon={<FolderIcon size={64} color={"rgb(59, 130, 246)"}/>} title="Documents" lastModified="2 days ago" className={styles.folders}/>
            <Folder icon={<FolderIcon size={64} color={"rgb(59, 130, 246)"}/>} title="Documents" lastModified="2 days ago" className={styles.folders}/>
            <Folder icon={<FolderIcon size={64} color={"rgb(59, 130, 246)"}/>} title="Documents" lastModified="2 days ago" className={styles.folders}/>
            <Folder icon={<FileText size={64} color={"rgb(234, 45, 12)"}/>} title="Documents" lastModified="2 days ago" size='2.4 MB' className={styles.folders}/>
        </div>
      </div>
    </div>
    </>
  );
}


// https://preview-minimal-google-drive-clone-kzmphz46kq210obq3dyr.vusercontent.net/