import Link from "next/link";
import {GlobeAltIcon} from "@heroicons/react/solid";
import * as React from "react";
import {useCurrentUserQuery} from "@/graphql/queries/useCurrentUserQuery";

const SignUpIcon = () => {
  const { data } = useCurrentUserQuery();

  if (data) {
    return <p>Welcome { data.currentUser.name} </p>
  }

  return (
    <>
    <p className="hidden md:inline">
      <Link href="/signup">Sign Up</Link>
    </p>
  <GlobeAltIcon className="h-6" />
    </>
  )
}

export default SignUpIcon;
