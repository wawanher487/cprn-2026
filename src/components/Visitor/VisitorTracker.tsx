"use client";
import { useEffect } from "react";

export default function VisitorTracker() {
    useEffect(() => {
        fetch("/api/visitor");
    }, []);

    return null;
}